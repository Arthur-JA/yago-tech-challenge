import { MongooseModule } from '@nestjs/mongoose';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, ValidationPipe } from '@nestjs/common';
import { join } from 'path';
import * as request from 'supertest';
import { FrontModule } from '../src/front/front.module';
import { config } from '../src/configuration';

describe('AppController (e2e)', () => {
  let app: NestExpressApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot(config.dbUrl, config.dbOptions),
        FrontModule,
      ],
    }).compile();

    app = moduleFixture.createNestApplication<NestExpressApplication>();
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    app.setBaseViewsDir(join(__dirname, '..', 'html'));
    app.setViewEngine('hbs');
    await app.init();
  });

  afterAll(async () => {
    console.log('CLOSE');
    await app.close();
  });


  it('should get homepage (GET)', async () => {
    const response = await request(app.getHttpServer()).get('/');
    expect(response.status).toEqual(HttpStatus.OK);
  });

  it('should post simulation and redirect to show simulation (POST)', async () => {
    const body = {
      lead: {
        email: 'aa@gmail.com',
        phoneNumber: '0102030405',
        address: 'my address',
        firstname: 'Pascal',
        lastname: 'Obistro',
      },
      quote: {
        "annualRevenue": 80000,
        "enterpriseNumber": "0649885171",
        "legalName": "example SA",
        "naturalPerson": true,
        "nacebelCodes": ["62010", "62020", "62030", "62090", "63110"]
      }
    }

    const response = await request(app.getHttpServer())
      .post('/create-simulation')
      .send(body);

    expect(response.status).toEqual(HttpStatus.FOUND);
    expect(response.headers.location).toBeDefined();

    const response2 = await request(app.getHttpServer())
      .get(response.headers.location);

    expect(response2.status).toBe(HttpStatus.OK);
  });
});
