from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from api.models import Car
from api.serializer import CarSerializer

@api_view(['GET'])
def api(request):
    cars = Car.objects.all()
    serializer = CarSerializer(cars, many=True)
    return Response(serializer.data)
