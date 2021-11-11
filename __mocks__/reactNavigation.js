import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({ goBack: jest.fn() }),
  useRoute: () => ({
    params: {
      item: {
        authors: ['Raul Pereira', 'Júlia Pereira Filho', 'Natália Barros Jr.'],
        category: 'Biografias',
        description:
          'Est cupiditate rerum sed nisi quam dolorem vel qui veniam. Veritatis quam expedita. Dolor unde animi est dolor unde qui nisi. Iusto in saepe repellendus officia omnis aut reiciendis sapiente. Voluptate et at ut. Velit est iure repellat doloribus omnis earum laborum. Modi sapiente laudantium similique recusandae modi eveniet minima sint in. Eum autem nihil est enim a nostrum quaerat magnam. Et tempora iure quidem aliquid rerum accusamus id.',
        id: '60171639faf5de22b804a06e',
        imageUrl: 'https://files-books.ioasys.com.br/Book-0.jpg',
        isbn10: '6163701883',
        isbn13: '951-6163701883',
        language: 'Inglês',
        pageCount: 990,
        published: 2003,
        publisher: 'Barros - Xavier',
        title: 'Assumenda',
      },
    },
  }),
}));
