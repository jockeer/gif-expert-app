import { getGifs } from "../../helpers/getGifs"

describe('Prueba de la funcion getGifs() de los helpers', () => { 

    test('Debe devolver una lista de 10 gifs', async () => { 

        const gifs = await getGifs('One Punch')
        expect(gifs.length).toBe(10)
    })

    test('Debe devolver una lista vacia', async () => { 

        const gifs = await getGifs('')
        
        expect(gifs.length).toBe(0)
    })

})