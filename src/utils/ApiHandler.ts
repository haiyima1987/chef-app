import { createClient } from '@supabase/supabase-js';

class ApiHandler {
  // IMPROVE: add loading here in combination with api count
  private static instance: ApiHandler;
  private readonly API_ROOT = 'https://lerzwadqkzkgdgtwekmq.supabase.co';

  public getClient() {
    return createClient(this.API_ROOT, process.env.NEXT_SUPABASE_API_KEY);
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new ApiHandler();
    }
    return this.instance;
  }
}

const api = ApiHandler.getInstance();

export default api;
