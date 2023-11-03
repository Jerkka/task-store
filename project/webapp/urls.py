from django.urls import path
from . import views

urlpatterns = [
    path('hello/', views.hello_page, name="hello-page"),
    path('app/', views.ActivityView.as_view(), name="activity")
]