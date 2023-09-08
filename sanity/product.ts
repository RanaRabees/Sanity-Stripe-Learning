/* eslint-disable import/no-anonymous-default-export */
// sanity/pet.ts

export default {
    name: 'product',
    type: 'document',
    title: 'Products',
    fields: [
        {
            name: 'title',
            title: 'Product Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Product Description',
            type: 'string'
        },
        {
            name: 'price',
            title: 'Product Price',
            type: "number"
        },
        {
            name: 'image',
            title: 'Product Image',
            type: 'image'
        }
    ]
}


