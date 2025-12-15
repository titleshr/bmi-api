const app = require('./app')
const request = require('supertest')

describe('POST /bmi', () => {
    it('should return bmi and category when input is valid', async () => {
    const res = await request(app)
        .post('/bmi')
        .send({weight: 50 , height: 165})

    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('bmi')
    expect(res.body).toHaveProperty('category')
    })

    it('should return 400 when weight less than 0', async () => {
        const res = await request(app)
        .post('/bmi')
        .send({weight: -0.1, height: 165})

    expect(res.status).toBe(400)
    expect(res.body.error).toBe('please input weight in range 0 - 300')
    })

    it('should return 400 when weight more than 300', async () => {
        const res = await request(app)
        .post('/bmi')
        .send({weight: 300.1, height: 165})

    expect(res.status).toBe(400)
    expect(res.body.error).toBe('please input weight in range 0 - 300')
    })
    
    it('should return 400 when height less than 0', async () => {
        const res = await request(app)
        .post('/bmi')
        .send({weight: 50, height: -0.1})

    expect(res.status).toBe(400)
    expect(res.body.error).toBe('please input height in range 0 - 300')
    })

    it('should return 400 when height more than 300', async () => {
        const res = await request(app)
        .post('/bmi')
        .send({weight: 50, height: 300.1})

    expect(res.status).toBe(400)
    expect(res.body.error).toBe('please input height in range 0 - 300')
    })
})