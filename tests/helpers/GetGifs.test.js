describe('Pruebas en getGifs()', () => {
    test('Debería de regresar un arreglo de objetos', async() => {

        const gifs = await getGifs('Dragon Ball');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });

    })
})