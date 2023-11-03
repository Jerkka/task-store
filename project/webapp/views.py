from typing import Any
from django.shortcuts import render
from django.views.generic import TemplateView
from .models import Activity

def hello_page(request):
    return render(request, template_name='webapp/home_page.html')



class ActivityView(TemplateView):
    template_name = 'webapp/activity.html'

    def get_context_data(self, **kwargs: Any) -> dict[str, Any]:        
        return {
            "activity_choices": [{
                "id" : c1,
                "name" : c2
            } for (c1,c2) in Activity.ACTIVITY_CHOICES],
        }