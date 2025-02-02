/**
 * @see https://nextjs.org/docs/pages/building-your-application/routing/api-routes
 * @see https://www.wisp.blog/blog/nextjs-15-api-get-and-post-request-examples
 * @example
 * // returns { message: 'Hello' }
 * fetch('/api/hello', { method: 'POST', body: JSON.stringify({ message: 'Hello' }) });
 */
export async function POST(request: Request) {
  const message = await request.json();
  return Response.json(message);
}
