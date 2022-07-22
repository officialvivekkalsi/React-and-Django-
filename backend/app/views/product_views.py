from rest_framework.decorators import api_view #permission_classes
# from rest_framework.permissions import IsAuthenticated,IsAdminUser
from rest_framework.response import Response
# from .products import Products
from app.models import Product
from app.serializers import Sproduct
# from django.contrib.auth.hashers import make_password
# from rest_framework import status


@api_view(['GET'])
def getProducts(request):
    queryset=Product.objects.all()
    serializers=Sproduct(queryset,many=True)
    return Response(serializers.data)

@api_view(['GET'])
def getProduct(request,pk):
    queryset=Product.objects.get(_id=pk)
    serializers=Sproduct(queryset,many=False)
    return Response(serializers.data)