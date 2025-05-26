

from django.shortcuts import render, redirect
from .forms import ContactForm
from django.contrib import messages


def index(request):
    return render(request, 'home/index.html')


def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # You can save or send this data, here we just print or message
            print(form.cleaned_data)
            messages.success(request, 'Your message has been sent!')
            return redirect('contact')
    else:
        form = ContactForm()
    return render(request, 'home/contact.html', {'form': form})