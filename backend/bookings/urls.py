from django.urls import path

from .views import booking_list_create, contact_message_create, login, profile, signup, social_login

urlpatterns = [
    path("bookings/", booking_list_create, name="booking-list-create"),
    path("contact-messages/", contact_message_create, name="contact-message-create"),
    path("auth/signup/", signup, name="auth-signup"),
    path("auth/login/", login, name="auth-login"),
    path("auth/social/", social_login, name="auth-social-login"),
    path("auth/profile/", profile, name="auth-profile"),
]
