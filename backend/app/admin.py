from django.contrib import admin
from .models import Order, OrderItem, Product, Rating, ShippingAddress

admin.site.register(Product)
admin.site.register(Rating)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(ShippingAddress)
