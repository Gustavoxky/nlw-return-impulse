import { SubmitFeedbackUseCase } from "./submitFeedbackUseCase";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
)

describe('Submit Feedback', () => {
    it('should be able to sobmit a feedback', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example coment',
            screenshot: 'data:image/png;base64,fadgaerar',
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });

    it('should not be able to sobmit feedback without type', async () => {
      await expect(submitFeedback.execute({
        type: '',
        comment: 'example coment',
        screenshot: 'data:image/png;base64,fadgaerar',
      })).rejects.toThrow();
    });

    it('should not be able to sobmit feedback without comment', async () => {
        await expect(submitFeedback.execute({
          type: 'BUG',
          comment: '',
          screenshot: 'data:image/png;base64,fadgaerar',
        })).rejects.toThrow();
      });

      it('should not be able to sobmit feedback with an invalid screenshot', async () => {
        await expect(submitFeedback.execute({
          type: 'BUG',
          comment: 'ta tudo bugado',
          screenshot: '123',
        })).rejects.toThrow();
      });
});

