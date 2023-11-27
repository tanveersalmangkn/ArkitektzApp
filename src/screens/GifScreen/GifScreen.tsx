import React, {useState, useEffect} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {useQuery} from 'react-query';
import {http} from '../../utils/http';
import {SearchBar} from '../../components/SearchBar';
import {GifItem} from '../../components/GifItems';

type Props = {};

export const GifScreen: React.FC<Props> = () => {
  const [gifData, setGifData] = useState<Gif[]>([]);
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (!searchText) {
      refetch();
    }
  }, [searchText, page]);

  type Gif = {
    id: string;
    url: string;
    type: string;
    title: string;
  };

  const fetchGifs = async (): Promise<Gif[]> => {
    const endpoint = searchText ? '/search' : '/trending';

    const response = await http.get(endpoint, {
      params: {
        q: searchText,
        offset: (page - 1) * 15,
      },
    });

    return response?.data?.data || [];
  };

  const handleClear = () => {
    setGifData([]);
    setSearchText('');
    setPage(1);
    refetch();
  };

  const {data, refetch, isLoading, error} = useQuery(
    ['gifs', searchText, page],
    fetchGifs,
    {
      onSuccess: newData => {
        if (searchText) {
          setGifData(newData);
        } else {
          setGifData(prevData => [...prevData, ...newData]);
        }

        setLoadingMore(false);
        setRefreshing(false);
      },
      onError: err => {
        console.log('Error:', err);
        setRefreshing(false);
      },
      enabled: true,
    },
  );

  const handleEndReached = () => {
    if (!loadingMore) {
      setPage(prevPage => prevPage + 1);
      setLoadingMore(true);
      refetch();
    }
  };

  const handleSearch = async () => {
    try {
      setLoadingMore(true);

      await refetch();
    } catch (error) {
      console.log('searchErr', error);
    } finally {
      setLoadingMore(false);
    }
  };

  const handleRefresh = async () => {
    try {
      setGifData([]);
      setRefreshing(true);
      await refetch();
    } catch (error) {
      console.log('handleRefreshErr', error);
    } finally {
      setRefreshing(false);
    }
  };

  if (isLoading && page === 1) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="small" color="black" />
      </View>
    );
  }

  return (
    <FlatList
      data={gifData}
      keyExtractor={(item, index) => item.id + index.toString()}
      renderItem={({item}) => <GifItem item={item} />}
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.5}
      ListHeaderComponent={
        <SearchBar
          value={searchText}
          onChangeText={setSearchText}
          onSearch={handleSearch}
          onClear={handleClear}
        />
      }
      ListFooterComponent={() =>
        loadingMore ? (
          <View style={{alignItems: 'center', padding: 10}}>
            <ActivityIndicator size="small" color="black" />
          </View>
        ) : null
      }
      onRefresh={handleRefresh}
      refreshing={refreshing}
    />
  );
};
