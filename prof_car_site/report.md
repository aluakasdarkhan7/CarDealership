# CarDeal Pro — Mini Project Report

## Introduction
CarDeal Pro is a small car dealership system built to demonstrate OOP principles and a simple client workflow: viewing inventory, booking test drives, and (optionally) posting bookings to a backend API. The project was chosen because car dealerships are a familiar domain with clear entities and interactions.

## Classes (5-8 minimum)
- Vehicle (abstract) — base for vehicle types
- Sedan — extends Vehicle
- SUV — extends Vehicle
- Customer — holds customer info
- TestDrive / Booking — booking entity
- Dealership / Inventory — manages cars and bookings
- CarFactory — factory pattern for creating vehicles

## OOP Principles applied
- **Abstraction**: Vehicle defines common interface for concrete car types.
- **Encapsulation**: fields are accessed through getters/setters; private by convention in JS/Python.
- **Inheritance**: Sedan and SUV inherit from Vehicle.
- **Polymorphism**: getInfo() is implemented by each car type with specifics.
- **Design Pattern**: Factory pattern (CarFactory) used to centralize creation logic.

## Use Case (example)
1. User opens inventory page.
2. User selects a car and fills booking form (name, phone, date).
3. Booking stored in browser localStorage (or POSTed to /api/bookings if backend is used).
4. Admin can view bookings via admin page or by reading bookings.json.

## How to run
- Static mode: open index.html in browser.
- Backend mode: install requirements.txt, run `python server.py`, open http://localhost:5000.
