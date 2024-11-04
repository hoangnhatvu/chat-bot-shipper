const order_list = `[
    {
        "order_id": 0,
        "customer_name": "Alice Johnson",
        "status": "Shipped",
        "order_date": "2023-10-25",
        "shipping_date": "2023-10-27",
        "delivery_date": "2023-11-05",
        "shipping_address": "123 Maple St, Chicago",
        "carrier": "FedEx",
        "tracking_number": "1Z9999",
        "item_description": "Laptop",
        "quantity": 1,
        "shipping_cost": 15.99,
        "shipper_name": "John Doe",
        "shipper_phone_number": "+1-800-463-3339",
        "current_location": "123 Maple St, Chicago"
    },
    {
        "order_id": 1,
        "customer_name": "Bob Smith",
        "status": "Processing",
        "order_date": "2023-10-28",
        "shipping_date": "2023-10-29",
        "delivery_date": "2023-11-07",
        "shipping_address": "456 Oak St, New York",
        "carrier": "UPS",
        "tracking_number": "1Z9988",
        "item_description": "Smartphone",
        "quantity": 1,
        "shipping_cost": 10.5,
        "shipper_name": "Sarah Lee",
        "shipper_phone_number": "+1-800-742-5877",
        "current_location": "New York"
    },
    {
        "order_id": 2,
        "customer_name": "Charlie Brown",
        "status": "Delivered",
        "order_date": "2023-10-20",
        "shipping_date": "2023-10-22",
        "delivery_date": "2023-10-31",
        "shipping_address": "789 Pine St, Los Angeles",
        "carrier": "USPS",
        "tracking_number": "9400",
        "item_description": "Tablet",
        "quantity": 1,
        "shipping_cost": 12.0,
        "shipper_name": "Delivered",
        "shipper_phone_number": "+1-800-275-8777",
        "current_location": "Los Angeles"
    },
    {
        "order_id": 3,
        "customer_name": "David Lee",
        "status": "Shipped",
        "order_date": "2023-10-26",
        "shipping_date": "2023-10-29",
        "delivery_date": "2023-11-06",
        "shipping_address": "321 Cedar St, Houston",
        "carrier": "DHL",
        "tracking_number": "JD0001",
        "item_description": "Headphones",
        "quantity": 2,
        "shipping_cost": 8.75,
        "shipper_name": "Michael Brown",
        "shipper_phone_number": "+1-800-225-5345",
        "current_location": "321 Cedar St, Houston"
    },
    {
        "order_id": 4,
        "customer_name": "Eve Thompson",
        "status": "Cancelled",
        "order_date": "2023-10-29",
        "shipping_date": "2023-10-30",
        "delivery_date": "2023-10-30",
        "shipping_address": "654 Elm St, Miami",
        "carrier": "UPS",
        "tracking_number": "1Z9977",
        "item_description": "Smartwatch",
        "quantity": 1,
        "shipping_cost": 0.0,
        "shipper_name": "Cancelled",
        "shipper_phone_number": "+1-800-742-5877",
        "current_location": "Miami"
    },
    {
        "order_id": 5,
        "customer_name": "Frank White",
        "status": "Processing",
        "order_date": "2023-10-30",
        "shipping_date": "2023-10-31",
        "delivery_date": "2023-11-08",
        "shipping_address": "987 Birch St, Phoenix",
        "carrier": "UPS",
        "tracking_number": "1Z9966",
        "item_description": "Camera",
        "quantity": 1,
        "shipping_cost": 9.25,
        "shipper_name": "Emily Smith",
        "shipper_phone_number": "+1-800-742-5877",
        "current_location": "Phoenix"
    },
    {
        "order_id": 6,
        "customer_name": "Grace Miller",
        "status": "Delivered",
        "order_date": "2023-10-19",
        "shipping_date": "2023-10-21",
        "delivery_date": "2023-10-30",
        "shipping_address": "111 Spruce St, San Francisco",
        "carrier": "FedEx",
        "tracking_number": "1Z8888",
        "item_description": "Bluetooth Speaker",
        "quantity": 1,
        "shipping_cost": 7.8,
        "shipper_name": "Delivered",
        "shipper_phone_number": "+1-800-463-3339",
        "current_location": "San Francisco"
    },
    {
        "order_id": 7,
        "customer_name": "Hannah Adams",
        "status": "Shipped",
        "order_date": "2023-10-27",
        "shipping_date": "2023-10-30",
        "delivery_date": "2023-11-09",
        "shipping_address": "222 Walnut St, Seattle",
        "carrier": "DHL",
        "tracking_number": "JD0002",
        "item_description": "E-reader",
        "quantity": 1,
        "shipping_cost": 6.9,
        "shipper_name": "Carlos Green",
        "shipper_phone_number": "+1-800-225-5345",
        "current_location": "222 Walnut St, Seattle"
    },
    {
        "order_id": 8,
        "customer_name": "Isaac Clark",
        "status": "Pending",
        "order_date": "2023-10-31",
        "shipping_date": "2023-11-01",
        "delivery_date": "2023-11-10",
        "shipping_address": "333 Chestnut St, Denver",
        "carrier": "USPS",
        "tracking_number": "9401",
        "item_description": "Wireless Mouse",
        "quantity": 3,
        "shipping_cost": 5.5,
        "shipper_name": "Pending",
        "shipper_phone_number": "+1-800-275-8777",
        "current_location": "Denver"
    }
    ]
;`;

export const context = [
    {
        role: 'system',
        content: `
        You are an AI assistant, you role is to support customer about their order status, provide exact and concise information about their order.
        We provided database about features of order status such as customer name, order day, shipper day, quantity, carrier.
        Ask customer about their order id and what information they want to know.
        You need to answer only the information about related to order statuses in database, if customer query unrelevant information, ask them to input another query.
        Be sure that you don't answer unrelevanted information.  
        The following is the shipping status database:
  
        ${order_list}

        description:
        + shipping_date: date order arive
  
        If customer think that there's any somthing wrong or problem with their order, ask them to contact customer service at hamy95637@gmail.com`,
    },
];