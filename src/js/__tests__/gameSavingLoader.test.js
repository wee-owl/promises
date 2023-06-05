import GameSavingLoader from '../gameSavingLoader';

test('check GameSavingLoader class', (done) => {
  const object = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };
  GameSavingLoader.load().then((saving) => {
    expect(saving).toEqual(object);
    done();
  });
});
