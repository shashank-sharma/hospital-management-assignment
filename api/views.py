from django.db.models import Q
from django.shortcuts import render
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.pagination import LimitOffsetPagination
from accounts.serializers import PatientDetailsSerializer
from accounts.models import PatientDetails
from rest_framework import viewsets
#
# # Create your views here.
# from rest_framework.generics import ListAPIView
#
#
# class PatientDetailsAPIView(ListAPIView):
#     serializer_class = PatientDetailsSerializer
#     filter_backends = [SearchFilter, OrderingFilter]
#     search_fields = ['phone_number']
#     pagination_class = LimitOffsetPagination
#
#     def get_queryset(self):
#         queryset_list = PatientDetails.objects.all()
#         query = self.request.GET.get('q')
#         if query:
#             queryset_list = queryset_list.filter(
#                 Q(phone_number__icontains=query)
#             ).distinct()
#
#         return queryset_list


class PatientDetailsAPIView(viewsets.ModelViewSet):
    queryset = PatientDetails.objects.all()
    serializer_class = PatientDetailsSerializer
    pagination_class = LimitOffsetPagination
