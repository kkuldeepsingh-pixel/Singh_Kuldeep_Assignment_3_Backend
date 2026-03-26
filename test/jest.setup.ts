// Always mock firebase in every test
jest.mock("../config/firebaseConfig", () => ({
  db: {
    collection: jest.fn(() => ({
      doc: jest.fn(() => ({
        set: jest.fn().mockResolvedValue(true),
        get: jest.fn().mockResolvedValue({
          exists: true,
          data: () => ({ id: '123', name: 'Test Event', date: '2026-02-23', capacity: 100 }),
        }),
        update: jest.fn().mockResolvedValue(true),
        delete: jest.fn().mockResolvedValue(true),
      })),
      get: jest.fn().mockResolvedValue({
        docs: [{ data: () => ({ id: '123', name: 'Test Event', date: '2026-02-23', capacity: 100 }) }],
      }),
    })),
  },
}));

// Reset all mocks after each test
afterEach(() => {
    jest.clearAllMocks();
});

afterAll(() => {
    jest.resetModules();
});