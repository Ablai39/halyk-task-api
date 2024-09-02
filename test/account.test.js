const axios = require('axios');
const expect = require('chai').expect;

describe('Account API Tests', () => {
    const baseURL = 'https://demoqa.com/Account/v1';

    it('should create a new user account', async () => {
        const payload = {
            userName: 'TestUser',
            password: 'P@ssw0rd123'
        };
        const response = await axios.post(`${baseURL}/User`, payload);
        expect(response.status).to.equal(201);
        expect(response.data).to.have.property('userID');
    });

    it('should generate a token for the user', async () => {
        const payload = {
            userName: 'TestUser',
            password: 'P@ssw0rd123'
        };
        const response = await axios.post(`${baseURL}/GenerateToken`, payload);
        expect(response.status).to.equal(200);
        expect(response.data).to.have.property('token');
    });

    it('should authenticate the user', async () => {
        const payload = {
            userName: 'TestUser',
            password: 'P@ssw0rd123'
        };
        const response = await axios.post(`${baseURL}/Authorized`, payload);
        expect(response.status).to.equal(200);
        expect(response.data).to.be.true;
    });

    it('should not authenticate with wrong credentials', async () => {
        const payload = {
            userName: 'TestUser',
            password: 'WrongPassword'
        };
        const response = await axios.post(`${baseURL}/Authorized`, payload);
        expect(response.status).to.equal(200);
        expect(response.data).to.be.false;
    });

    it('should delete the user account', async () => {
        const userID = 'your-user-id'; // заменить на актуальный ID
        const response = await axios.delete(`${baseURL}/User/${userID}`);
        expect(response.status).to.equal(204);
    });
});
