from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Product, OrderItem, Order, ShippingAddress

class UserSerializer(serializers.ModelSerializer):
    # here you need to indent so Meta belongs to the serializer.
    #name=serializers.SerializerMethodField(read_only=True)
    _id=serializers.SerializerMethodField(read_only=True)
    isAdmin=serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        # fields = ( 'id','username', 'email', )
        fields = ( 'id','_id','isAdmin', 'username', 'email', )#name
    
    # def get_name(self,obj):
    #     name=obj.first_name
    #     if name == '':
    #         name = obj.email
    #     return name
    
    def get_isAdmin(self,obj):
        return obj.is_staff

    def get__id(self,obj):
        return obj.id



class UserSerializerwithtoken(UserSerializer):
    token=serializers.SerializerMethodField(read_only=True)
    class Meta:
        model=User
        fields = ( 'id','_id','isAdmin', 'username', 'email','token')#'name',

    def get_token(self,obj):
        token=RefreshToken.for_user(obj)
        return str(token.access_token)
            

class Sproduct(serializers.ModelSerializer):
    class Meta:
        model=Product
        fields='__all__'


class ShippingAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShippingAddress
        fields = '__all__'


class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
    orderItems = serializers.SerializerMethodField(read_only=True)
    shippingAddress = serializers.SerializerMethodField(read_only=True)
    user = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Order
        fields = '__all__'

    def get_orderItems(self, obj):
        items = obj.orderitem_set.all()
        serializer = OrderItemSerializer(items, many=True)
        return serializer.data


    def get_shippingAddress(self, obj):
        try:
            address = ShippingAddressSerializer(
                obj.shippingaddress, many=False).data
        except:
            address = False
        return address

    def get_user(self, obj):
        user = obj.user
        serializer = UserSerializer(user, many=False)
        return serializer.data
