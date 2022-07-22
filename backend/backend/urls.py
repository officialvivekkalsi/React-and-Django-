from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('api/', include('app.urls')),
    path('',include('rest_framework.urls')),
    path('api/products/',include('app.urls.product_urls')),
    path('api/user/',include('app.urls.user_urls')),
    path('api/orders/',include('app.urls.orders_urls'))
   # path('',include('app.urls.order_urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT )
