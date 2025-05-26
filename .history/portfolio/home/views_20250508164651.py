

from django.shortcuts import render, redirect
from .forms import ContactForm
from django.core.mail import send_mail
from django.contrib import messages


def index(request):
    return render(request, 'home/index.html')


def index(request):
    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        message = request.POST.get("message")
        
        # You can process or store the data here
        # Example: send an email
        send_mail(
            f"Message from {name}",
            message,
            email,
            ['your_email@example.com'],
        )
        messages.success(request, "Your message has been sent successfully!")
        return redirect('index')  # redirect to avoid form resubmission
    
    return render(request, "index.html")