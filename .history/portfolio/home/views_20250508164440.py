

from django.shortcuts import render, redirect
from .forms import ContactForm
from django.contrib import messages


def index(request):
    return render(request, 'home/index.html')


def index(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # Optionally, send email or save to DB
            print(form.cleaned_data)
            messages.success(request, 'Your message has been sent!')
            form = ContactForm()  # Reset form after submission
    else:
        form = ContactForm()
    return render(request, 'home/index.html', {'form': form})