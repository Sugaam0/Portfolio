

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

        # Input validation
        if not all([name, email, message]):
            messages.error(request, "All fields are required.")
            return redirect('index')

        try:
            # Send email
            send_mail(
                subject=f"Message from {name}",
                message=f"Sender Email: {email}\n\nMessage:\n{message}",
                from_email='jobmania420@gmail.com',  # Verified sender email
                recipient_list=['sugamacharya1863@gmail.com'],
                fail_silently=False,
            )
            messages.success(request, "Your message has been sent successfully!")
        except Exception as e:
            messages.error(request, f"Failed to send message: {str(e)}")
        
        return redirect('index')  # Redirect to index with #contact anchor

    return render(request, "home/index.html")