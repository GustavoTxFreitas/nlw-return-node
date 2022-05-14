"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const submit_feedback_use_case_1 = require("./submit-feedback-use-case");
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();
describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {
        const submitFeedback = new submit_feedback_use_case_1.SubmitFeedbackUseCase({ create: createFeedbackSpy }, { sendMail: sendMailSpy });
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'exemplo de comentário',
            screenshot: 'data:image/png;base64Image.jpg'
        })).resolves.not.toThrow();
        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });
    it('should not be able to submit a feedback without a type', async () => {
        const submitFeedback = new submit_feedback_use_case_1.SubmitFeedbackUseCase({ create: async () => { } }, { sendMail: async () => { } });
        await expect(submitFeedback.execute({
            type: '',
            comment: 'exemplo de comentário',
            screenshot: 'data:image/png;base64Image.jpg'
        })).rejects.toThrow();
    });
    it('should not be able to submit a feedback without a comment', async () => {
        const submitFeedback = new submit_feedback_use_case_1.SubmitFeedbackUseCase({ create: async () => { } }, { sendMail: async () => { } });
        await expect(submitFeedback.execute({
            type: 'OTHER',
            comment: '',
            screenshot: 'data:image/png;base64Image.jpg'
        })).rejects.toThrow();
    });
    it('should not be able to submit a feedback with a invalid screenshot', async () => {
        const submitFeedback = new submit_feedback_use_case_1.SubmitFeedbackUseCase({ create: async () => { } }, { sendMail: async () => { } });
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'exemplo de comentário',
            screenshot: 'invalidImage.jpg'
        })).rejects.toThrow();
    });
});
