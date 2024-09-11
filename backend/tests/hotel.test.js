"use strict";

jest.setTimeout(300000); // 30 seconds timeout

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../src/server")); // Import the app
describe('Hotel Endpoints', () => {
    it('should fetch all hotels', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(server_1.default).get('/api/hotels');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    }));
    it('should book a hotel', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(server_1.default)
            .post('/api/hotels/book/1') // Assuming hotel with ID 1 exists
            .set('Authorization', 'Bearer token'); // Add JWT token from login test
        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toEqual('Hotel booked successfully');
    }));
});
