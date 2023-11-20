from django.contrib import admin
from api.models import Car
# Register your models here.


class CarAdmin(admin.ModelAdmin):
    list_display = ("marka","model")

admin.site.register(Car, CarAdmin)