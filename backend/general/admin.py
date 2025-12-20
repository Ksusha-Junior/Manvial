from django.contrib import admin
from main_bot.models import Service, Discount, Price
from .models import Post
from .models import Personal_info

admin.site.register(Service)
admin.site.register(Discount)
admin.site.register(Price)
admin.site.register(Post)
admin.site.register(Personal_info)