import { JwtService } from './jwt.service';

describe('JwtService', () => {
  let service: JwtService;

  beforeEach(() => {
    service = new JwtService();
    window.localStorage.removeItem('jwtToken');
  });

  afterEach(() => {
    window.localStorage.removeItem('jwtToken');
  });

  it('guarda el token en localStorage', () => {
    service.saveToken('token-de-prueba');

    expect(window.localStorage.getItem('jwtToken'))
      .toBe('token-de-prueba');
  });

  it('recupera el token almacenado', () => {
    window.localStorage.setItem('jwtToken', 'token-existente');

    expect(service.getToken()).toBe('token-existente');
  });

  it('elimina el token almacenado', () => {
    window.localStorage.setItem('jwtToken', 'token-a-eliminar');

    service.destroyToken();

    expect(window.localStorage.getItem('jwtToken')).toBeNull();
  });
});
