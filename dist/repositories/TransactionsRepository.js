"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Transaction_1 = __importDefault(require("../models/Transaction"));
var TransactionsRepository = /** @class */ (function () {
    function TransactionsRepository() {
        this.transactions = [];
    }
    TransactionsRepository.prototype.all = function () {
        return this.transactions;
    };
    TransactionsRepository.prototype.getBalance = function () {
        var income = this.reduce('income');
        var outcome = this.reduce('outcome');
        return {
            income: income,
            outcome: outcome,
            total: income - outcome,
        };
    };
    TransactionsRepository.prototype.create = function (_a) {
        var title = _a.title, value = _a.value, type = _a.type;
        var transaction = new Transaction_1.default({
            title: title,
            value: value,
            type: type,
        });
        this.transactions.push(transaction);
        return transaction;
    };
    TransactionsRepository.prototype.reduce = function (type) {
        return this.transactions
            .filter(function (transaction) { return transaction.type === type; })
            .reduce(function (Acumulador, valorAtual) {
            return Acumulador + valorAtual.value;
        }, 0);
    };
    return TransactionsRepository;
}());
exports.default = TransactionsRepository;
