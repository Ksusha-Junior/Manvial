from django.contrib import admin
from main_bot.models import Service, Discount, Price
from .models import Post

admin.site.register(Service)
admin.site.register(Discount)
admin.site.register(Price)
admin.site.register(Post)