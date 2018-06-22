import { List } from 'immutable'
import MockAdapter from 'axios-mock-adapter'

import {
  ModelStateRecord,
  ModelRecord,
  selectModels,
  selectModelsByMakeId,
  getModels,
} from 'ducks/models'
import { MakeRecord, MakesStateRecord } from 'ducks/makes'
import apiClient from 'apiClient'
import configureStore from 'configureStore'

const mockMakes = [
  { id: 1, equipmentCodeId: 1, name: 'garmin' },
  { id: 2, equipmentCodeId: 2, name: 'EZPass' },
]

const mockModels = [
  { id: 1, name: 'Nuvi', makeId: 1 },
  { id: 1, name: 'EZPass', makeId: 2 },
]

describe('models duck', () => {
  let store
  let mock

  beforeEach(() => {
    store = configureStore({})

    mock = new MockAdapter(apiClient)
    mock.onGet('/domain/model').reply(() => [200, mockModels])
  })

  it('can get a list of models from the API and store them', async () => {
    await store.dispatch(getModels())

    expect(selectModels(store.getState())).toEqual(
      List(mockModels.map(ModelRecord)),
    )
  })

  it('can get a list of models by make from state', async () => {
    store = configureStore({
      makes: MakesStateRecord({
        makesList: List(mockMakes.map(MakeRecord)),
      }),
      models: ModelStateRecord({
        modelList: List(mockModels.map(ModelRecord)),
      }),
    })

    expect(selectModelsByMakeId(1)(store.getState())).toEqualImmutable(
      List([ModelRecord(mockModels[0])]),
    )
  })
})
