// /**
//  * A queue implemented by array to handle a bunch of orders
//  */
// import { Order as OrderType } from '../types/Service'

// export default class OrderQueue<OrderType> {
//   private timeThreshold: number = 10000
//   private static instance: any
//   private queue: OrderType[] = []

//   // Singleton
//   constructor () {
    
//   }

//   static getInstance () {
//     if (!this.instance) {
//       this.instance = new OrderQueue()
//     }
//     return this.instance
//   }

//   /**
//    * add an array of orders or just an object of one order to queue
//    * @param order : ;
//    */
//   add (order: OrderType | OrderType[]) {
//     if (Array.isArray(order)) {
//       order.forEach(o => this.queue.push(o))
//     } else this.queue.push(order)
//   }

//   peek (): OrderType | null {
//     return this.queue.length > 0 ? this.queue[0] : null
//   }

//   poll (): OrderType | null | undefined {
//     return this.queue.length > 0 ? this.queue.shift() : null
//   }

//   isEmpty (): Boolean {
//     return this.queue.length == 0
//   }

// }