import { apiCreator, createPromiseAction } from '../../evolution/createAction'

export const alertAction = createPromiseAction("alert", apiCreator("../../smock/output.js"));
