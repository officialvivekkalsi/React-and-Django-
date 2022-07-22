
from django.urls import path
# from app.views import MyTokenObtainPairView
from app.views import user_views as views

urlpatterns = [
    path('login/',views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),  
    path('',views.getUsers,name='getuser'),
    path('register/',views.createUser,name='createuser'),
    path('profile/',views.getUserProfile,name='userprofile'),    
    path('profile/update',views.updateUserProfile,name='updateprofile')
]

