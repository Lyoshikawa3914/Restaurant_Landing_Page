from django.shortcuts import render

# Create your views here.
def orderScreenView(request):
    return render(request, "orders.html", {})