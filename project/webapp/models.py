from django.db import models
from django.contrib.auth import get_user_model
# Create your models here.

class Activity(models.Model): 
    ACTIVITY_CHOICES= [
        ("eatndrink", "Eat & Drink"),
        ("dating", "Dates"),
        ("pass_times", "Pass times"),
    ]
    user = models.ForeignKey(get_user_model(), on_delete= models.CASCADE,
                             related_name="activities")
    name = models.CharField(max_length=100)
    actvitycat = models.CharField(max_length=20, choices=ACTIVITY_CHOICES)
