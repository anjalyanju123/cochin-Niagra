from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'Base.html')

def home(request):
    return render(request,'Index.html')

def about(request):
    return render(request,'About.html')

def contact(request):
    return render(request,'Contact.html')

def packages(request):
    return render(request,'Packages.html')

def services(request):
    return render(request,'Services.html')

def gallery(request):
    return render(request,'Gallery.html')