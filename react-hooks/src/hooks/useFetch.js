// import P from 'prop-types';
import {
  useEffect,
  useRef,
  useState,
} from 'react';

const isEqual = (item1, item2) => {
  return (
    JSON.stringify(item1) ===
    JSON.stringify(item2)
  );
};

export const useFetch = (url, options) => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [shouldLoad, setShouldLoad] =
    useState(false);
  const rfUrl = useRef(url);
  const rfOpt = useRef(options);

  useEffect(() => {
    let changed = false;

    if (!isEqual(url, rfUrl.current)) {
      rfUrl.current = url;
      changed = true;
    }

    if (!isEqual(options, rfOpt.current)) {
      rfOpt.current = options;
      changed = true;
    }

    if (changed) {
      setShouldLoad((s) => !s);
    }
  }, [url, options]);

  useEffect(() => {
    let wait = false;

    const controller = new AbortController();
    const signal = controller.signal;

    console.log(
      'EFFECT',
      new Date().toLocaleString(),
    );
    console.log(rfOpt.current.headers);

    setLoading(true);

    const fetchData = async () => {
      await new Promise((r) =>
        setTimeout(r, 2000),
      );
      try {
        const rawData = await fetch(
          rfUrl.current,
          {
            signal,
            ...rfOpt.current,
          },
        );
        const data = await rawData.json();
        if (!wait) {
          setResult(data);
          setLoading(false);
        }
      } catch (error) {
        if (!wait) {
          setLoading(false);
        }
        console.log('MY ERROR: ', error);
      }
    };
    fetchData();

    return () => {
      wait = true;
      controller.abort();
    };
  }, [shouldLoad]);

  return [result, loading];
};
