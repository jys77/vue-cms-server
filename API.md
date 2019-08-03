# API for Vue CMS Mobile

>Attention: All api interfaces are assumed to be running on http://localhost:3030. If succeed, it will return `status: 0` and data, otherwise return `status: -1`

## 1. banner

### GET banner sliders

+ Interface: `/api/getbanners`

+ Return sample:
```javascript
{
    status: 0,
    message: [
    		{
    		_id:'XXX',
            url:'https://XXX.XXX',
            img:'https://XXX/XXX.png',
    	},
        {
        //...
    	},
        //...
    ]
}
```

## 2. News (articles)

### GET news list

+ Interface: `/api/getnews`

+ Return sample:
```javascript
{
    status: 0,
    news: [
        {
            _id:'XXX',
            add_time: '2019-07-27T08:58:03.424Z',
            clicked: 12,
            img_url: 'https://XXX/XXX.png',
            title: 'News Title Test 4',
            abstract: 'This is the news abstract 4',
            content: '<div>...</div>'
        },
        {
        //...
        },
        //...
    ]
}
```

### GET news by id

+ Interface: `/api/getnewsinfo?newsId=`

+ Return sample:
```javascript
{
    status: 0,
    news: {
    		_id:'XXX',
            add_time: '2019-07-27T08:58:03.424Z',
            clicked: 12,
            img_url: 'https://XXX/XXX.png',
            title: 'News Title Test 4',
            abstract: 'This is the news abstract 4',
            content: '<div>...</div>'
        }
}
```

## 3. Photo

### GET all photo categories

+ Interface: `/api/getphotypes`

+ Return sample:
```javascript
{
    status: 0,
    types: ["Fashion","Music","Sports","Animals","Nature","Travel"]
}
```

### GET all photos in one category

+ Interface: `/api/getphos?type=`

+ Return sample:
```javascript
{
    status: 0,
    phos: [
        {
            _id:'XXX',
            phos:['https://XXX/XXX.png','https://XXX/XXX.png'],
            type: 'Animals',
            intro: 'This is a series of Photos of lovely DOGS!',
        },
        {
        //...
        }
        //...
    ]
}
```

### GET photos by id

+ Interface: `/api/getphodetail?phoId=`

+ Return sample:
```javascript
{
    status: 0,
    pho: {
        phos: ['https://XXX/XXX.png','https://XXX/XXX.png'],
        _id: "XXX",
        type: "Animals",
        intro: "This is a series of Photos of lovely DOGS!"
    }
}
```

## Merch

### GET merch list by page

+ Interface: `/api/getmerch?page=`

+ Return sample:
```javascript
{
    status: 0,
    merch: [
        {
            add_Date: "2019-07-29T07:00:15.165Z",
            photos: ['https://XXX/XXX.png','https://XXX/XXX.png'],
            _id: "XXX",
            title: "Stone & Beam Medallion Decorative Throw Pillow, Aqua",
            old_price: 49.99,
            new_price: 39.99,
            stock: 29,
            count: 1
        },
        {
        //...
        },
        //...
    ]
}
```

### GET merch by id

+ Interface: `/api/getmerchinfo?merchId=`

+ Return sample:
```javascript
{
    status: 0,
    merch: {
        add_Date: "2019-07-29T07:00:15.165Z",
        photos: ['https://XXX/XXX.png','https://XXX/XXX.png'],
        _id: "XXX",
        title: "Stone & Beam Medallion Decorative Throw Pillow, Aqua",
        old_price: 49.99,
        new_price: 39.99,
        stock: 29,
        count: 1
    }
}
```

### GET cart list by id(s)

+ Interface: `/api/getcartlist/:ids` (mutiple ids should be seperated by `,`)

+ Return sample:
```javascript
{
    "status": 0,
    "cart": [
        {
            add_Date: "2019-07-29T07:00:15.165Z",
            photos: ['https://XXX/XXX.png','https://XXX/XXX.png'],
            _id: "XXX",
            title: "Beckham Hotel Collection Gel Pillow (2-Pack)",
            old_price: 79.99,
            new_price: 35.99,
            stock: 36,
            count: 1
        },
        {
        //...
        },
        //...
    ]
}
```










