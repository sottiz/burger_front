import axios from "axios";

import "array-compact-map";

export class OrderService {
    static instance;

    static getInstance() {
        if (OrderService.instance === undefined) {
            OrderService.instance = new OrderService();
        }
        return OrderService.instance;
    }

    constructor() { }

    static async getOrders() {
        const response = await axios.get("http://localhost:3003/order/view");
        if (response.data && Array.isArray(response.data)) {


            return response.data.map((e) => e);
        } else {
            return [];
        }

        }

        static async deleteOrders(id) {
            const response = await axios.delete("http://localhost:3003/order/" + id);
            if (response.data && Array.isArray(response.data)) {
    
    
                return response.data.map((e) => e);
            } else {
                return [];
            }
    
            }
    }
