import { supabase } from '../supabaseClient';

export const portalRecordTypes = {
  notice: 'notice',
  event: 'event',
  result: 'result',
  student: 'student',
  enquiry: 'enquiry',
  job: 'job',
  internship: 'internship',
  certificationClaim: 'certification_claim'
};

export async function fetchPortalRecords(recordType) {
  const { data, error } = await supabase
    .from('portal_records')
    .select('id, payload, created_at')
    .eq('record_type', recordType)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data.map((record) => ({
    ...record.payload,
    id: record.id,
    createdAt: record.created_at
  }));
}

export async function createPortalRecord(recordType, payload, ownerId = null, returnRecord = true) {
  let request = supabase
    .from('portal_records')
    .insert({ record_type: recordType, payload, owner_id: ownerId });

  if (returnRecord) {
    request = request.select('id, payload, created_at').single();
  }

  const { data, error } = await request;
  if (error) throw error;
  if (!returnRecord) return null;
  return { ...data.payload, id: data.id, createdAt: data.created_at };
}

export async function updatePortalRecord(recordType, id, payload) {
  const { data, error } = await supabase
    .from('portal_records')
    .update({ payload })
    .eq('record_type', recordType)
    .eq('id', id)
    .select('id')
    .single();

  if (error) throw error;
  return data;
}

export async function deletePortalRecord(recordType, id) {
  const { data, error } = await supabase
    .from('portal_records')
    .delete()
    .eq('record_type', recordType)
    .eq('id', id)
    .select('id')
    .single();

  if (error) throw error;
  return data;
}

export async function fetchStudentResult(rollNo) {
  const { data, error } = await supabase.rpc('get_student_result', {
    p_roll_no: rollNo.trim()
  });

  if (error) throw error;
  return data;
}
