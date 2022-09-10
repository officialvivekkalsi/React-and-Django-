from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from rest_framework.response import Response
from app.serializers import UserSerializer,UserSerializerwithtoken
from django.contrib.auth.models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.hashers import make_password
from rest_framework import status


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        # serializer=UserSerializerwithtoken(self.user).data
        # the serializer items is fields ='id','_id','isAdmin', 'username', 'email','name' 
        # for k ,v in serializer.items():
            # data[k] = v
        data["username"] = self.user.username
        data["email"] = self.user.email
        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUserProfile(request):
    user=request.user
    serializer=UserSerializerwithtoken(user,many=False)
    
    data=request.data
    user.first_name=data['name']
    user.username=data['email']
    user.email=data['email']
    
    if data['password'] != '':
        user.password = make_password(data['password'])
        
    user.save()
    return Response(serializer.data)
    

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user=request.user
    serializer=UserSerializer(user,many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users=User.objects.all()
    serializer=UserSerializer(users,many=True)
    return Response(serializer.data)

@api_view(['POST'])
def createUser(request):
    data=request.data
    try:
        user=User.objects.create(
            first_name=data['name'],
            username=data['email'],
            email=data['email'],
            password=make_password(data['password'])
        )
        serializer=UserSerializerwithtoken(user,many=False)
        return Response(serializer.data)
    except:
        message={'message:':'User with this email is already exist'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST)

    
