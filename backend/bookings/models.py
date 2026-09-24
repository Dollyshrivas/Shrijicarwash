from django.db import models


class Booking(models.Model):
    SERVICE_CHOICES = [
        ("Basic Cleaning", "Basic Cleaning"),
        ("Interior Cleaning", "Interior Cleaning"),
        ("Premium Cleaning", "Premium Cleaning"),
    ]

    name = models.CharField(max_length=120)
    email = models.EmailField()
    date = models.DateField()
    service = models.CharField(max_length=40, choices=SERVICE_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["date", "created_at"]

    def __str__(self):
        return f"{self.name} - {self.service} ({self.date})"
