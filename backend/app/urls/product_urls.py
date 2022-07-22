from django.urls import path
#from app.views import MyTokenObtainPairView
from app.views import product_views as views

urlpatterns = [
    path('',views.getProducts,name='Products'),
    path('<int:pk>',views.getProduct,name='product'),
]
