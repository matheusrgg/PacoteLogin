import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthStore } from './auth.store';
import { AdminInterface } from '../interfaces/admin.interface';

describe('AuthStore', () => {
    let service: AuthStore;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [AuthStore]
        });
        service = TestBed.inject(AuthStore);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify(); // Verifies that no requests are outstanding after each test
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should have initial state as null', () => {
        service.user$.subscribe(user => {
            expect(user).toBeNull();
        });
    });

    it('should login successfully', () => {
        const mockCredentials: AdminInterface = {
            username: 'your_username',
            password: 'your_password'
        };


        const mockUser = { /* Mock user object */ };

        service.login(mockCredentials).subscribe(user => {
            expect(user).toEqual(mockUser);
            expect(service.user$).toBeTruthy();
        });

        const req = httpMock.expectOne('http://localhost:4000/admin/login');
        expect(req.request.method).toBe('POST');
        req.flush(mockUser);
    });

    it('should logout successfully', () => {
        const spy = spyOn(service['subject'], 'next');
        service.logout();
        expect(spy).toHaveBeenCalledWith(null);
    });
});