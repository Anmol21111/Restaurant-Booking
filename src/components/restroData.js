const restaurantData = [
    {
        cover : 'https://b.zmtcdn.com/data/pictures/1/20086861/667a089bb9a84d1960e4de1ae59d4af5.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*',
        name: 'Naivedyam By Moti Mahal',
        images: ['https://b.zmtcdn.com/data/pictures/1/20086861/7f7094326df90cc4baf6a0cae8b05073.jpg?fit=around|300:273&crop=300:273;*,*', 'https://b.zmtcdn.com/data/pictures/1/20086861/eaa7cc6db420b2c0e72acc9c6d4d2ce4.jpg?fit=around|300:273&crop=300:273;*,*'],
        rating: 4.4,
        description: 'North Indian, Chinese, Desserts, Beverages Aashiana, Lucknow',
        menu: [
            {
                name : 'Special Thali',
                image : 'https://b.zmtcdn.com/data/pictures/chains/1/20086861/e179e5ac0810ff9050609d3a30bf5c33.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 400,
                quantity : '1'
            },
            {
                name : 'Sweets',
                image : 'https://b.zmtcdn.com/data/pictures/chains/1/20086861/ad9a82e49be5fb192a727674f6959f17.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 1000,
                quantity : '1kg'
            },

        ]
    },
    {
        cover : 'https://b.zmtcdn.com/data/pictures/9/19958399/8da6462331c37dc76d25bb89b978c69d.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        name: 'Moti Mahal restaurant',
        images: ['https://b.zmtcdn.com/data/pictures/6/800486/5d62435ef34e1fbeb9447fc852332891.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A','https://b.zmtcdn.com/data/pictures/8/19657198/2310098025cbe62f00295c99f65da028_featured_v2.jpg?output-format=webp','https://b.zmtcdn.com/data/pictures/5/18492875/692e3d02206d1b929c223074b9876441_featured_v2.jpg?output-format=webp'],
        rating: 9.8,
        description: 'North Indian, Chinese, South Indian, Street Food, Fast Food, BBQ, Desserts, Beverages Hazratganj, Lucknow',
        location:<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.747669791521!2d80.94233417451818!3d26.847976862871224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd08774591d3%3A0x65dbb72b07dc709a!2sHazratganj%2C%20Lucknow%2C%20Uttar%20Pradesh%20226001!5e0!3m2!1sen!2sin!4v1689989519072!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>,
        menu: [
            {
                name : 'Paw Bhaji',
                image : 'https://b.zmtcdn.com/data/reviews_photos/e3c/2f73642c33f94a4aabab01b99988fe3c_1516026548.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 100,
                quantity : 'full'
            },
            {
                name : 'Gajar ka hakwa',
                image : 'https://b.zmtcdn.com/data/reviews_photos/534/261b8e55f28e7ebfde93b411e87e9534_1518942810.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 200,
                quantity : 'full'
            },
            {
                name : 'Khasta',
                image : 'https://b.zmtcdn.com/data/reviews_photos/130/bb19c3286ede854b1e109649fd576130_1575765493.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price :50,
                quantity : '1 pice'
            },

        ]
    },
    {
        cover : 'https://b.zmtcdn.com/data/pictures/chains/3/800363/c5f88498b5273c6084128ba34f86a4ab.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*',
        name: 'Pizza Hut',
        images: ['https://b.zmtcdn.com/data/pictures/6/800486/5d62435ef34e1fbeb9447fc852332891.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A','https://b.zmtcdn.com/data/pictures/8/19657198/2310098025cbe62f00295c99f65da028_featured_v2.jpg?output-format=webp','https://b.zmtcdn.com/data/pictures/5/18492875/692e3d02206d1b929c223074b9876441_featured_v2.jpg?output-format=webp'],
        rating: 3.7,
        description: 'Pizza, Pasta, Italian, Desserts, Beverages Hazratganj, Lucknow',
        menu: [
            {
                name : 'Piza',
                image : 'https://b.zmtcdn.com/data/pictures/chains/3/800363/4f4440d6f4e39151f92a850c27ac13f7.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 300,
                quantity : 'medium'
            },
            {
                name : 'Pasta',
                image : 'https://b.zmtcdn.com/data/pictures/chains/3/800363/3d68dcaec174bc64cae5b116ed6b78d9.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 200,
                quantity : 'full'
            },
            {
                name : 'Cold coffe',
                image : 'https://b.zmtcdn.com/data/pictures/chains/3/800363/57676a2b2881d402d01a7832abaa0bb6.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 250,
                quantity : '1'
            },

        ]
    },
    {
        cover : 'https://b.zmtcdn.com/data/reviews_photos/9b6/7c6c6f19a1270333ca6688b50e9759b6_1686133425.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        name: 'Shri Balaji Dhaba',
        images: ['https://b.zmtcdn.com/data/reviews_photos/594/64b72857e30bf4fddafd2ebc5c6e9594_1686133427.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A','https://b.zmtcdn.com/data/reviews_photos/aae/40ffac15c1c4a2abeb49424904834aae_1679494335.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A','https://b.zmtcdn.com/data/reviews_photos/9bb/d75191dc8b3767a3ec8c5e2e7ad9e9bb_1679494148.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A'],
        rating: 7.8,
        description: 'bla bla',
        menu: [
            {
                name : 'Thali',
                image : 'https://b.zmtcdn.com/data/pictures/chains/6/800496/5a84192df95a1c9a8c280ae1daa2abd9.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 250,
                quantity : '1'
            },
            {
                name : 'Special Tahali',
                image : 'https://b.zmtcdn.com/data/dish_photos/686/c53f08fcee88dfa1c806d00758785686.png?fit=around|130:130&crop=130:130;*,*',
                price : 500,
                quantity : '1'
            },
            {
                name : 'Kadhai panner',
                image : 'https://b.zmtcdn.com/data/dish_photos/88e/5064db2e8e5fedd66c6efa7cfe81788e.jpg?fit=around|130:130&crop=130:130;*,*',
                price : 250,
                quantity : '1'
            },

        ]
    },

    {
        cover :'https://b.zmtcdn.com/data/pictures/chains/6/800126/8da58a7d7ca795db5dbf0efd508678c5.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*',
        name: 'KFC',
        images: ['https://b.zmtcdn.com/data/pictures/chains/6/800126/ab7dc239625ef34124d8a38b57a22e3a.jpg?fit=around|300:273&crop=300:273;*,','https://b.zmtcdn.com/data/pictures/chains/6/800126/0e79614ea14113b8b3d4b48574293d00.jpg?fit=around|300:273&crop=300:273;*,*','https://b.zmtcdn.com/data/pictures/chains/6/800126/0e79614ea14113b8b3d4b48574293d00.jpg?fit=around|300:273&crop=300:273;*,*'],
        rating: 7.8,
        description: 'bla bla',
        menu: [
            {
                name : 'Chiken combo',
                image : 'https://b.zmtcdn.com/data/pictures/chains/6/800126/0e79614ea14113b8b3d4b48574293d00.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 500,
                quantity : '1'
            },
            {
                name : 'Burger',
                image : 'https://b.zmtcdn.com/data/pictures/chains/6/800126/99ef15aa42501a40de7753f503a116ce.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 250,
                quantity : '1'
            },
            {
                name : 'Chiken biryani',
                image : 'https://b.zmtcdn.com/data/pictures/chains/6/800126/d915945d19e0fc3df78fe65a82c7ef83.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 250,
                quantity : '1'
            },

        ]
    },
    {
        cover :'https://b.zmtcdn.com/data/pictures/2/801712/352c89c799198b1710150075fe88d763.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*',
        name: 'New Lucknow Kitchen',
        images: ['https://b.zmtcdn.com/data/pictures/chains/6/800126/ab7dc239625ef34124d8a38b57a22e3a.jpg?fit=around|300:273&crop=300:273;*,','https://b.zmtcdn.com/data/pictures/chains/6/800126/0e79614ea14113b8b3d4b48574293d00.jpg?fit=around|300:273&crop=300:273;*,*','https://b.zmtcdn.com/data/pictures/chains/6/800126/0e79614ea14113b8b3d4b48574293d00.jpg?fit=around|300:273&crop=300:273;*,*'],
        rating: 7.8,
        description: 'bla bla',
        menu: [
            {
                name : 'Thali',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/70885bac3c607a24daf8d97c7f090558.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 100,
                quantity : '1'
            },
            {
                name : 'Panner',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/a0a8a5295abc8a7d053852f8c07ddc66.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 380,
                quantity : '1'
            },
            {
                name : 'Cold Milk',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/06310e28008756b95401b2e334ad6696.png?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 100,
                quantity : '1'
            },

        ]
    },
    {
        cover :'https://b.zmtcdn.com/data/reviews_photos/4f3/5bae21782f852847e8c334c0de8eb4f3_1603608434.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*',
        name: 'Capoor & Sons',
        images: ['https://b.zmtcdn.com/data/pictures/chains/6/800126/ab7dc239625ef34124d8a38b57a22e3a.jpg?fit=around|300:273&crop=300:273;*,','https://b.zmtcdn.com/data/pictures/chains/6/800126/0e79614ea14113b8b3d4b48574293d00.jpg?fit=around|300:273&crop=300:273;*,*','https://b.zmtcdn.com/data/pictures/chains/6/800126/0e79614ea14113b8b3d4b48574293d00.jpg?fit=around|300:273&crop=300:273;*,*'],
        rating: 7.8,
        description: 'North Indian, Chinese, Oriental, Fast Food, Street Food, Desserts, Coffee, Beverages,Lucknow',
        menu: [
            {
                name : 'Thali',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/70885bac3c607a24daf8d97c7f090558.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 100,
                quantity : '1'
            },
            {
                name : 'Panner',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/a0a8a5295abc8a7d053852f8c07ddc66.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 380,
                quantity : '1'
            },
            {
                name : 'Cold Milk',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/06310e28008756b95401b2e334ad6696.png?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 100,
                quantity : '1'
            },

        ]
    },
    {
        cover :'https://b.zmtcdn.com/data/pictures/8/19657198/9254f226dff2f49f3c37a3780a8a9bbd.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*',
        name: 'Tanatan',
        images: ['https://b.zmtcdn.com/data/pictures/8/19657198/f0ee76464c6b98ab79f7815650cfa59f.jpeg?output-format=webp&fit=around|300:273&crop=300:273;*,*,https://b.zmtcdn.com/data/pictures/8/19657198/986a25c89e050de2da87adaf80ad3498.jpeg?output-format=webp&fit=around|300:273&crop=300:273;*,*,https://b.zmtcdn.com/data/pictures/8/19657198/9254f226dff2f49f3c37a3780a8a9bbd.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*'],
        rating: 7.8,
        description: 'North Indian, Lucknowi, Desserts, Beverages Hazratganj, Lucknow',
        menu: [
            {
                name : 'Thali',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/70885bac3c607a24daf8d97c7f090558.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 100,
                quantity : '1'
            },
            {
                name : 'Panner',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/a0a8a5295abc8a7d053852f8c07ddc66.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 380,
                quantity : '1'
            },
            {
                name : 'Cold Milk',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/06310e28008756b95401b2e334ad6696.png?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 100,
                quantity : '1'
            },

        ]
    },
    {
        cover :'https://b.zmtcdn.com/data/pictures/1/20403131/f9c846d89eb4209e9768186c8f27c220.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*',
        name: 'Romeo Lane',
        images: ['https://b.zmtcdn.com/data/pictures/1/20403131/a9226c98703d064351afa8e0dfbcf229.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*,https://b.zmtcdn.com/data/pictures/chains/1/20403131/854d6ff8e033e42221098ce104f12a7e.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*'],
        rating: 7.8,
        description: 'Chinese, Biryani, Italian, North Indian, Asian, Oriental, DessertsGomti Nagar, Lucknow',
        menu: [
            {
                name : 'Thali',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/70885bac3c607a24daf8d97c7f090558.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 100,
                quantity : '1'
            },
            {
                name : 'Panner',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/a0a8a5295abc8a7d053852f8c07ddc66.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 380,
                quantity : '1'
            },
            {
                name : 'Cold Milk',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/06310e28008756b95401b2e334ad6696.png?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 100,
                quantity : '1'
            },

        ]
    },
    {
        cover :'https://b.zmtcdn.com/data/pictures/7/19299057/2631084e07ed8bad71f5f325d213f8fc.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*',
        name: 'Lord of The Drinks',
        images: ['https://b.zmtcdn.com/data/pictures/chains/7/19299057/6ab336c71fbcffee23273a2f98555d1d.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*,https://b.zmtcdn.com/data/pictures/chains/7/19299057/83fe4e8949c351aa1de21981c8865916.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*'],
        rating: 7.8,
        description: 'North Indian, Chinese, Continental, Pizza, Pasta, Fast Food, Beverages Gomti Nagar, Lucknow',
        menu: [
            {
                name : 'Thali',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/70885bac3c607a24daf8d97c7f090558.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 100,
                quantity : '1'
            },
            {
                name : 'Panner',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/a0a8a5295abc8a7d053852f8c07ddc66.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 380,
                quantity : '1'
            },
            {
                name : 'Cold Milk',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/06310e28008756b95401b2e334ad6696.png?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 100,
                quantity : '1'
            },

        ]
    },
    {
        cover :'https://b.zmtcdn.com/data/pictures/1/20403131/f9c846d89eb4209e9768186c8f27c220.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*',
        name: 'Romeo Lane',
        images: ['https://b.zmtcdn.com/data/pictures/1/20403131/a9226c98703d064351afa8e0dfbcf229.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*,https://b.zmtcdn.com/data/pictures/chains/1/20403131/854d6ff8e033e42221098ce104f12a7e.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*'],
        rating: 7.8,
        description: 'Chinese, Biryani, Italian, North Indian, Asian, Oriental, DessertsGomti Nagar, Lucknow',
        menu: [
            {
                name : 'Thali',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/70885bac3c607a24daf8d97c7f090558.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 100,
                quantity : '1'
            },
            {
                name : 'Panner',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/a0a8a5295abc8a7d053852f8c07ddc66.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 380,
                quantity : '1'
            },
            {
                name : 'Cold Milk',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/06310e28008756b95401b2e334ad6696.png?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 100,
                quantity : '1'
            },

        ]
    },
    {
        cover :'https://b.zmtcdn.com/data/pictures/1/20403131/f9c846d89eb4209e9768186c8f27c220.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*',
        name: 'Romeo Lane',
        images: ['https://b.zmtcdn.com/data/pictures/1/20403131/a9226c98703d064351afa8e0dfbcf229.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*,https://b.zmtcdn.com/data/pictures/chains/1/20403131/854d6ff8e033e42221098ce104f12a7e.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*'],
        rating: 7.8,
        description: 'Chinese, Biryani, Italian, North Indian, Asian, Oriental, DessertsGomti Nagar, Lucknow',
        menu: [
            {
                name : 'Thali',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/70885bac3c607a24daf8d97c7f090558.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 100,
                quantity : '1'
            },
            {
                name : 'Panner',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/a0a8a5295abc8a7d053852f8c07ddc66.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 380,
                quantity : '1'
            },
            {
                name : 'Cold Milk',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/06310e28008756b95401b2e334ad6696.png?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 100,
                quantity : '1'
            },

        ]
    },
    {
        cover :'https://b.zmtcdn.com/data/pictures/1/20403131/f9c846d89eb4209e9768186c8f27c220.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*',
        name: 'Romeo Lane',
        images: ['https://b.zmtcdn.com/data/pictures/1/20403131/a9226c98703d064351afa8e0dfbcf229.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*,https://b.zmtcdn.com/data/pictures/chains/1/20403131/854d6ff8e033e42221098ce104f12a7e.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*'],
        rating: 7.8,
        description: 'Chinese, Biryani, Italian, North Indian, Asian, Oriental, DessertsGomti Nagar, Lucknow',
        menu: [
            {
                name : 'Thali',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/70885bac3c607a24daf8d97c7f090558.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 100,
                quantity : '1'
            },
            {
                name : 'Panner',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/a0a8a5295abc8a7d053852f8c07ddc66.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 380,
                quantity : '1'
            },
            {
                name : 'Cold Milk',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/06310e28008756b95401b2e334ad6696.png?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 100,
                quantity : '1'
            },

        ]
    },
    {
        cover :'https://b.zmtcdn.com/data/pictures/1/20403131/f9c846d89eb4209e9768186c8f27c220.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*',
        name: 'Romeo Lane',
        images: ['https://b.zmtcdn.com/data/pictures/1/20403131/a9226c98703d064351afa8e0dfbcf229.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*,https://b.zmtcdn.com/data/pictures/chains/1/20403131/854d6ff8e033e42221098ce104f12a7e.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*'],
        rating: 7.8,
        description: 'Chinese, Biryani, Italian, North Indian, Asian, Oriental, DessertsGomti Nagar, Lucknow',
        menu: [
            {
                name : 'Thali',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/70885bac3c607a24daf8d97c7f090558.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 100,
                quantity : '1'
            },
            {
                name : 'Panner',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/a0a8a5295abc8a7d053852f8c07ddc66.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 380,
                quantity : '1'
            },
            {
                name : 'Cold Milk',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/06310e28008756b95401b2e334ad6696.png?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 100,
                quantity : '1'
            },

        ]
    },
    {
        cover :'https://b.zmtcdn.com/data/pictures/1/20403131/f9c846d89eb4209e9768186c8f27c220.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*',
        name: 'Romeo Lane',
        images: ['https://b.zmtcdn.com/data/pictures/1/20403131/a9226c98703d064351afa8e0dfbcf229.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*,https://b.zmtcdn.com/data/pictures/chains/1/20403131/854d6ff8e033e42221098ce104f12a7e.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*'],
        rating: 7.8,
        description: 'Chinese, Biryani, Italian, North Indian, Asian, Oriental, DessertsGomti Nagar, Lucknow',
        menu: [
            {
                name : 'Thali',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/70885bac3c607a24daf8d97c7f090558.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 100,
                quantity : '1'
            },
            {
                name : 'Panner',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/a0a8a5295abc8a7d053852f8c07ddc66.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 380,
                quantity : '1'
            },
            {
                name : 'Cold Milk',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/06310e28008756b95401b2e334ad6696.png?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 100,
                quantity : '1'
            },

        ]
    },
    {
        cover :'https://b.zmtcdn.com/data/pictures/1/20403131/f9c846d89eb4209e9768186c8f27c220.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*',
        name: 'Romeo Lane',
        images: ['https://b.zmtcdn.com/data/pictures/1/20403131/a9226c98703d064351afa8e0dfbcf229.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*,https://b.zmtcdn.com/data/pictures/chains/1/20403131/854d6ff8e033e42221098ce104f12a7e.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*'],
        rating: 7.8,
        description: 'Chinese, Biryani, Italian, North Indian, Asian, Oriental, DessertsGomti Nagar, Lucknow',
        menu: [
            {
                name : 'Thali',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/70885bac3c607a24daf8d97c7f090558.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 100,
                quantity : '1'
            },
            {
                name : 'Panner',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/a0a8a5295abc8a7d053852f8c07ddc66.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 380,
                quantity : '1'
            },
            {
                name : 'Cold Milk',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/06310e28008756b95401b2e334ad6696.png?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 100,
                quantity : '1'
            },

        ]
    },
    {
        cover :'https://b.zmtcdn.com/data/pictures/1/20403131/f9c846d89eb4209e9768186c8f27c220.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*',
        name: 'Romeo Lane',
        images: ['https://b.zmtcdn.com/data/pictures/1/20403131/a9226c98703d064351afa8e0dfbcf229.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*,https://b.zmtcdn.com/data/pictures/chains/1/20403131/854d6ff8e033e42221098ce104f12a7e.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*'],
        rating: 7.8,
        description: 'Chinese, Biryani, Italian, North Indian, Asian, Oriental, DessertsGomti Nagar, Lucknow',
        menu: [
            {
                name : 'Thali',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/70885bac3c607a24daf8d97c7f090558.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 100,
                quantity : '1'
            },
            {
                name : 'Panner',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/a0a8a5295abc8a7d053852f8c07ddc66.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 380,
                quantity : '1'
            },
            {
                name : 'Cold Milk',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/06310e28008756b95401b2e334ad6696.png?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 100,
                quantity : '1'
            },

        ]
    },
    {
        cover :'https://b.zmtcdn.com/data/pictures/1/20403131/f9c846d89eb4209e9768186c8f27c220.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*',
        name: 'Romeo Lane',
        images: ['https://b.zmtcdn.com/data/pictures/1/20403131/a9226c98703d064351afa8e0dfbcf229.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*,https://b.zmtcdn.com/data/pictures/chains/1/20403131/854d6ff8e033e42221098ce104f12a7e.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*'],
        rating: 7.8,
        description: 'Chinese, Biryani, Italian, North Indian, Asian, Oriental, DessertsGomti Nagar, Lucknow',
        menu: [
            {
                name : 'Thali',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/70885bac3c607a24daf8d97c7f090558.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 100,
                quantity : '1'
            },
            {
                name : 'Panner',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/a0a8a5295abc8a7d053852f8c07ddc66.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 380,
                quantity : '1'
            },
            {
                name : 'Cold Milk',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/06310e28008756b95401b2e334ad6696.png?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 100,
                quantity : '1'
            },

        ]
    },
    {
        cover :'https://b.zmtcdn.com/data/pictures/1/20403131/f9c846d89eb4209e9768186c8f27c220.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*',
        name: 'Romeo Lane',
        images: ['https://b.zmtcdn.com/data/pictures/1/20403131/a9226c98703d064351afa8e0dfbcf229.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*,https://b.zmtcdn.com/data/pictures/chains/1/20403131/854d6ff8e033e42221098ce104f12a7e.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*'],
        rating: 7.8,
        description: 'Chinese, Biryani, Italian, North Indian, Asian, Oriental, DessertsGomti Nagar, Lucknow',
        menu: [
            {
                name : 'Thali',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/70885bac3c607a24daf8d97c7f090558.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 100,
                quantity : '1'
            },
            {
                name : 'Panner',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/a0a8a5295abc8a7d053852f8c07ddc66.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 380,
                quantity : '1'
            },
            {
                name : 'Cold Milk',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/06310e28008756b95401b2e334ad6696.png?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 100,
                quantity : '1'
            },

        ]
    },
    {
        cover :'https://b.zmtcdn.com/data/pictures/1/20403131/f9c846d89eb4209e9768186c8f27c220.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*',
        name: 'Romeo Lane',
        images: ['https://b.zmtcdn.com/data/pictures/1/20403131/a9226c98703d064351afa8e0dfbcf229.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*,https://b.zmtcdn.com/data/pictures/chains/1/20403131/854d6ff8e033e42221098ce104f12a7e.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*'],
        rating: 7.8,
        description: 'Chinese, Biryani, Italian, North Indian, Asian, Oriental, DessertsGomti Nagar, Lucknow',
        menu: [
            {
                name : 'Thali',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/70885bac3c607a24daf8d97c7f090558.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 100,
                quantity : '1'
            },
            {
                name : 'Panner',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/a0a8a5295abc8a7d053852f8c07ddc66.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 380,
                quantity : '1'
            },
            {
                name : 'Cold Milk',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/06310e28008756b95401b2e334ad6696.png?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 100,
                quantity : '1'
            },

        ]
    },
    {
        cover :'https://b.zmtcdn.com/data/pictures/1/20403131/f9c846d89eb4209e9768186c8f27c220.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*',
        name: 'Romeo Lane',
        images: ['https://b.zmtcdn.com/data/pictures/1/20403131/a9226c98703d064351afa8e0dfbcf229.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*,https://b.zmtcdn.com/data/pictures/chains/1/20403131/854d6ff8e033e42221098ce104f12a7e.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*'],
        rating: 7.8,
        description: 'Chinese, Biryani, Italian, North Indian, Asian, Oriental, DessertsGomti Nagar, Lucknow',
        menu: [
            {
                name : 'Thali',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/70885bac3c607a24daf8d97c7f090558.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 100,
                quantity : '1'
            },
            {
                name : 'Panner',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/a0a8a5295abc8a7d053852f8c07ddc66.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 380,
                quantity : '1'
            },
            {
                name : 'Cold Milk',
                image : 'https://b.zmtcdn.com/data/pictures/chains/2/801712/06310e28008756b95401b2e334ad6696.png?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
                price : 100,
                quantity : '1'
            },

        ]
    }


]

export default restaurantData;