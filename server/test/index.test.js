const chai = require('chai');
const chaiHttp = require('chai-http');

const url = 'http://localhost:3000';
chai.use(chaiHttp);
chai.should();

describe('Pruebas', () => {
    it('deberia tener un codigo 200', (done) => {
        chai.request(url)
            .get('/data')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });
});