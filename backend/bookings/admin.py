from django.contrib import admin

from .models import Booking


@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "date", "service", "created_at")
    list_filter = ("service", "date")
    search_fields = ("name", "email")
