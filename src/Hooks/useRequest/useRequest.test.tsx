import { renderHook } from '@testing-library/react-hooks';
import mockAxios from '../../__mocks__/axios';
import {useRequest} from './useRequest';

interface Testing {
  name: string;
  date: string;
}
describe('Tests useRequest Hook', () => {
  afterEach(() => {
    mockAxios.mockClear();
  });
  
  it('Should set Loading states correctly', async () => {
    mockAxios.mockResolvedValue({name: 'matheus', date: ''});
    const { result, waitForNextUpdate} = renderHook(() => useRequest<Testing>({url: 'https://url.com'}));
    expect(result.current.isLoading).toBe(false);
    result.current.request();
    expect(result.current.isLoading).toBe(true);
    await waitForNextUpdate();
    expect(result.current.isLoading).toBe(false);
  });

  it('Response should match given data', async () => {
    const data: Testing = {name: 'matheus', date: ''};
    mockAxios.mockResolvedValue({data});
    const { result, waitForNextUpdate} = renderHook(() => useRequest<Testing>({url: 'https://url.com'}));
    result.current.request();
    expect(result.current.isLoading).toBe(true);
    await waitForNextUpdate();
    expect(result.current.response).toStrictEqual(data);
    expect(result.current.isLoading).toBe(false);
  });

  it('Should set error to state', async () => {
    const err = 'error message';
    mockAxios.mockRejectedValue(err);
    const { result, waitForNextUpdate} = renderHook(() => useRequest<Testing>({url: 'https://url.com'}));
    result.current.request();
    expect(result.current.isLoading).toBe(true);
    await waitForNextUpdate();
    expect(result.current.error).toStrictEqual(err);
    expect(result.current.isLoading).toBe(false);
  });
});
