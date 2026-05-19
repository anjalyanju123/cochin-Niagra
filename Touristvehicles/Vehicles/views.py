from django.shortcuts import render,redirect
from django.core.mail import send_mail
from django.conf import settings
# Create your views here.
def index(request):
    return render(request,'Base.html')

def home(request):
    return render(request,'Index.html')

def about(request):
    return render(request,'About.html')

def packages(request):
    return render(request,'Packages.html')

def services(request):
    return render(request,'Services.html')

def gallery(request):
    return render(request,'Gallery.html')

def contact(request):
    if request.method == "POST":
        name = request.POST.get("name")
        phone = request.POST.get("phone")
        email = request.POST.get("email")
        subject = request.POST.get("subject")
        message = request.POST.get("message")

        full_message = f"""
                        Name: {name}
                        Phone: {phone}
                        Email: {email}

                        Message:
                        {message}
                        """

        send_mail(
            subject,
            full_message,
            settings.DEFAULT_FROM_EMAIL,
            ['niagaratours1122@gmail.com'],  # where you want to receive mails niagaratours1122@gmail.com
            fail_silently=False,
        )

    return render(request, "contact.html")